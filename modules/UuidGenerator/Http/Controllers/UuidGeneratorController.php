<?php

declare(strict_types=1);

namespace Modules\UuidGenerator\Http\Controllers;

use Illuminate\Routing\Controller;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;
use Modules\UuidGenerator\Providers\UuidGeneratorServiceProvider;
use function sprintf;

class UuidGeneratorController extends Controller
{
    public function index(): Response
    {
        return Inertia::render(sprintf('%s::Index', UuidGeneratorServiceProvider::$moduleName), [
            'ns' => UuidGeneratorServiceProvider::$moduleName,
            'uuid' => Str::uuid()->toString(),
        ]);
    }
}
