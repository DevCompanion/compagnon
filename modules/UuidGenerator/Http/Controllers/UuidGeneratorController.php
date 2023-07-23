<?php

declare(strict_types=1);

namespace Modules\UuidGenerator\Http\Controllers;

use Illuminate\Routing\Controller;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class UuidGeneratorController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('UuidGenerator::Index', [
            'uuid' => Str::uuid()->toString(),
        ]);
    }
}
