<?php

declare(strict_types=1);

namespace Modules\UuidGenerator\Http\Controllers;

use Illuminate\Routing\Controller;
use Illuminate\Support\Str;
use Inertia\Inertia;

class UuidGeneratorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('UuidGenerator::Index', [
            'uuid' => Str::uuid()->toString(),
        ]);
    }
}
