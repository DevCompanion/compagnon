<?php

declare(strict_types=1);

namespace Modules\PDFCompressor\Services\Providers\Ghostscript;

use Modules\PDFCompressor\Contracts\Providers\PDFCompressorProviderInterface;

class GhostscriptWrapper implements PDFCompressorProviderInterface
{
    public const ID = 'ghostscript';

    public function compress(mixed $resource, array $options): string
    {
        /**
         * TODO:
         * - determine if the resource is a filepath, an url or a resource
         * - parse options
         */

        return '';
    }

    public function supports(string $providerId): bool
    {
        return self::ID === $providerId;
    }
}
