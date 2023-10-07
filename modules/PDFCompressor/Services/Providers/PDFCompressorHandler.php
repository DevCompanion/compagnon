<?php

declare(strict_types=1);

namespace Modules\PDFCompressor\Services\Providers;

use Modules\PDFCompressor\Contracts\Providers\PDFCompressorProviderInterface;
use Throwable;

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
        foreach ($this->providers as $provider) {
            if (!$provider->supports($providerId)) {
                continue;
            }

            try {
                return $provider->compress($resource, $options);
            } catch (Throwable $e) {
                return null;
            }
        }
    }
}
