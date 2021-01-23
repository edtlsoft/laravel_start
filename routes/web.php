<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\RoleController;
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

Route::get('/permissions', [PermissionController::class, 'index'])->name('permissions.index');
Route::get('/permissions/select2', [PermissionController::class, 'indexselect2'])->name('permissions.select2');
Route::post('/permissions', [PermissionController::class, 'store'])->name('permissions.store');
Route::put('/permissions/{permission}', [PermissionController::class, 'update'])->name('permissions.update');
Route::delete('/permissions/{permission}', [PermissionController::class, 'destroy'])->name('permissions.destroy');

Route::get('/roles', [RoleController::class, 'index'])->name('roles.index');
Route::post('/roles', [RoleController::class, 'store'])->name('roles.store');

Route::get('/', [DashboardController::class, 'index'])->name('dashboard'); 

/*
* ROUTES OF AUTHENTICATION
*/
Route::namespace('Auth')->group(base_path('routes/modules/authentication.php'));


// Wildcard route
Route::get('{path}', [DashboardController::class, 'index'])->where('path', '([A-z0-9\-\/\_\.Ññ]+)?');