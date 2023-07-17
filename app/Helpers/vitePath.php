<?php

declare(strict_types=1);

if ( ! function_exists('vite_path')) {
    /**
     * Generate the correct path for vite based on the component name.
     */
    function vite_path(string $component): string
    {
        $parts = explode('::', $component);
        if (1 === count($parts)) {
            // This is a normal component, not part of a module.
            return "resources/js/Pages/{$parts[0]}.tsx";
        }

        if (2 === count($parts)) {
            $path = "modules/{$parts[0]}/Resources/assets/js/Pages/{$parts[1]}.tsx";
            if (file_exists(base_path('/') . $path)) {
                return $path;
            }
        }

        if (3 === count($parts)) {
            $moduleType = match ($parts[0]) {
                'Modules' => 'modules',
                'ExternalModules' => 'external-modules',
                default => throw new \RuntimeException("The component {$component} does not exist."),
            };

            $path = "{$moduleType}/{$parts[1]}/Resources/assets/js/Pages/{$parts[2]}.tsx";
            if (file_exists(base_path('/') . $path)) {
                return $path;
            }
        }

        throw new \RuntimeException("The component {$component} does not exist.");
    }
}
