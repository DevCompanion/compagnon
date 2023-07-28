<?php

declare(strict_types=1);

namespace Modules\Dashboard\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Routing\Controller;
use MenuFactory;

class MenuController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(MenuFactory::create());
    }
}
