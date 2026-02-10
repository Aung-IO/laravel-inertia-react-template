<?php

require __DIR__ . '/vendor/autoload.php';

use Illuminate\Support\Facades\Route;

if (class_exists(Route::class)) {
    echo "Route class exists and is loadable.\n";
} else {
    echo "Route class NOT found.\n";
}
