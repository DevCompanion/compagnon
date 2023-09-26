<?php

namespace Modules\PDFCompressor\Contracts\Providers;

interface PDFCompressorProviderInterface
{
    public function compress(mixed $resource, array $options): string;

    public function supports(string $providerId): bool;
}
