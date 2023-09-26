<?php

declare(strict_types=1);

namespace Modules\PDFCompressor\Services\Providers;

use Modules\PDFCompressor\Contracts\Providers\PDFCompressorProviderInterface;

class PDFCompressorHandler
{
    /**
     * @var iterable<PDFCompressorProviderInterface>
     */
    private iterable $providers;

    public function __construct()
    {
        $this->providers = app()->tagged(PDFCompressorProviderInterface::class);
    }

    public function compress(string $providerId, mixed $resource, array $options = []): ?string
    {
        // load the provider
        // no provider -> return null
        // compress else
    }
}
