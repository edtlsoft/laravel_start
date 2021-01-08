<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Auth\PermissionController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::post('/permissions', [PermissionController::class, 'store'])->name('permissions.store');


Route::get('/', [DashboardController::class, 'index'])->name('dashboard'); 

/*
* ROUTES OF AUTHENTICATION
*/
Route::namespace('Auth')->group(base_path('routes/modules/authentication.php'));


// Wildcard route
Route::get('{path}', [DashboardController::class, 'index'])->where('path', '([A-z0-9\-\/\_\.Ññ]+)?');