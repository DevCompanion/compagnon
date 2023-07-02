<?php

namespace Modules\UuidGenerator\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Route;
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
            'uuid'=> Str::uuid()->toString(),
        ]);
    }
}
