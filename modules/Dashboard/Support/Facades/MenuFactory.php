<?php

declare(strict_types=1);

namespace Modules\Dashboard\Support\Facades;

use Illuminate\Support\Facades\Facade;

final class MenuFactory extends Facade
{
    protected static function getFacadeAccessor(): string
    {
        return 'menu-factory';
    }
}
