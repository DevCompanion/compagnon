<?php

declare(strict_types=1);

namespace Modules\Dashboard\Http\Controllers;

use Illuminate\Routing\Controller;
use Inertia\Inertia;
use Inertia\Response;
use Modules\Dashboard\Providers\DashboardServiceProvider;

class DashboardController extends Controller
{
    public function index(): Response
    {
        return Inertia::render(sprintf('%s::Index', DashboardServiceProvider::MODULE_NAME), [
            'ns' => DashboardServiceProvider::MODULE_NAME,
        ]);
    }
}
