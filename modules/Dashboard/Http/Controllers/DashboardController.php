<?php

declare(strict_types=1);

namespace Modules\Dashboard\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Inertia\Inertia;
use Modules\Dashboard\Providers\DashboardServiceProvider;
use Modules\UuidGenerator\Providers\UuidGeneratorServiceProvider;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render(sprintf('%s::Index', DashboardServiceProvider::$moduleName), [
            'ns' => UuidGeneratorServiceProvider::$moduleName,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Renderable
     */
    public function create()
    {
        return view('dashboard::create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Renderable
     */
    public function store(Request $request)
    {

    }

    /**
     * Show the specified resource.
     *
     * @param  int  $id
     * @return Renderable
     */
    public function show($id)
    {
        return view('dashboard::show');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Renderable
     */
    public function edit($id)
    {
        return view('dashboard::edit');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @return Renderable
     */
    public function update(Request $request, $id)
    {

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Renderable
     */
    public function destroy($id)
    {

    }
}
