<?php

declare(strict_types=1);

namespace Modules\UuidGenerator\Http\Controllers;

use Illuminate\Routing\Controller;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class UuidGeneratorController extends Controller
{
    private string $module_name;

    public function __construct()
    {
        $this->module_name = basename(dirname(__DIR__, 2));
    }

    public function index(): Response
    {
        return Inertia::render('UuidGenerator::Index', [
            'ns' => $this->module_name,
            'uuid' => Str::uuid()->toString(),
        ]);
    }
}
