<?php

declare(strict_types=1);

if (! function_exists('vite_path')) {
    /**
     * Generate the correct path for vite based on the component name.
     *
     * @param  string  $component
     * @return string
     */
    function vite_path(string $component): string
    {
        $parts = explode('::', $component);

        if (count($parts) === 1) {
            // This is a normal component, not part of a module.
            return "resources/js/Pages/{$parts[0]}.tsx";
        }

        return "modules/{$parts[0]}/Resources/assets/js/Pages/{$parts[1]}.tsx";
    }
}
