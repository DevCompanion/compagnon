<?php

declare(strict_types=1);

namespace Modules\PDFCompressor\Services\Providers\Ghostscript;

use Exception;
use Modules\PDFCompressor\Contracts\Providers\PDFCompressorProviderInterface;

class GhostscriptWrapper implements PDFCompressorProviderInterface
{
    public const ID = 'ghostscript';

    public function compress(mixed $resource, array $options): string
    {
        $inputPath = match (true) {
            is_resource($resource) => $this->getInputPathFromResource($resource),
            filter_var($resource, FILTER_VALIDATE_URL) => $this->getInputPathFromUrl($resource),
        };
        $outputPath = tempnam(sys_get_temp_dir(), 'tmp_compressed_pdf_');

        $gsCommand = sprintf(
            'gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/%s -dNOPAUSE -dQUIET -dBATCH -sOutputFile=%s %s',
            'ebook',
            $outputPath,
            $inputPath
        );

        exec($gsCommand, $output, $returnCode);

        if (0 !== $returnCode || ! file_exists($outputPath)) {
            throw new Exception('Ghostscript compression failed.');
        }

        $content = file_get_contents($outputPath);
        if ( ! $content) {
            throw new Exception('Ghostscript compression failed.');
        }

        return $content;
    }

    public function supports(string $providerId): bool
    {
        return self::ID === $providerId;
    }

    private function getInputPathFromResource(mixed $resource): string
    {
        $tempFilePath = tempnam(sys_get_temp_dir(), 'tempfile_');
        if ( ! $tempFilePath) {
            throw new Exception('Unable to create temporary file.');
        }

        $tempFile = fopen($tempFilePath, 'w');
        stream_copy_to_stream($resource, $tempFile);
        fclose($tempFile);

        return $tempFilePath;
    }

    private function getInputPathFromUrl(mixed $resource): string
    {
        $tempFilePath = tempnam(sys_get_temp_dir(), 'tempfile_');
        if ( ! $tempFilePath) {
            throw new Exception('Unable to create temporary file.');
        }

        $fileContents = file_get_contents($resource);
        file_put_contents($tempFilePath, $fileContents);

        return $tempFilePath;
    }
}
