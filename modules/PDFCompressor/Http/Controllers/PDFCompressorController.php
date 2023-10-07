<?php

declare(strict_types=1);

namespace Modules\PDFCompressor\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Inertia\Inertia;
use Inertia\Response;
use Modules\PDFCompressor\Providers\PDFCompressorServiceProvider;
use function sprintf;

class PDFCompressorController extends Controller
{
    public function index(): Response
    {
        return Inertia::render(sprintf('%s::Index', PDFCompressorServiceProvider::MODULE_NAME), [
            'ns' => PDFCompressorServiceProvider::MODULE_NAME,
        ]);
    }

    public function create(): Response
    {

    }

    public function store(Request $request): Response
    {

    }

    public function show($id): Response
    {

    }

    public function edit($id): Response
    {

    }

    public function update(Request $request, $id): Response
    {

    }

    public function destroy($id): Response
    {

    }
}
