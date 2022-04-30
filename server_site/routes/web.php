<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;

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

Route::get('/', function () {
    return view('welcome');
});

Route::get("/api", function () {
    return response()->json(['hhkjhjk' => 'jjkljlkl']);
});
//Route::put('students/{id}', 'App\Http\Controllers\StudentController@update');
// Route::put('students/{id}', 'App\Http\Controllers\StudentController@update');
// Route::get('students', 'App\Http\Controllers\StudentController@store');
// Route::post('students', 'App\Http\Controllers\StudentController@create');
// Route::get('students/{id}', 'App\Http\Controllers\StudentController@find');
// Route::delete('students/{id}', 'App\Http\Controllers\StudentController@delete');
// Route::post('students', 'App\Http\Controllers\StudentController@create');



Route::post('register', [ApiController::class, 'register']);
Route::post('logins', [ApiController::class, 'authenticate']);
//Route::post('logouts', [ApiController::class, 'logouts']);
Route::group(['middleware' => ['jwt.verify']], function () {



    Route::get('students', 'App\Http\Controllers\StudentController@store');
    Route::get('students/{id}', 'App\Http\Controllers\StudentController@find');
    Route::post('students', 'App\Http\Controllers\StudentController@create');
    Route::put('students/{id}', 'App\Http\Controllers\StudentController@update');
    Route::delete('students/{id}', 'App\Http\Controllers\StudentController@delete');



    Route::post('logouts', [ApiController::class, 'logouts']);
    Route::post('get_user', [ApiController::class, 'get_user']);


    // Route::get('products', [ProductController::class, 'index']);
    // Route::get('products/{id}', [ProductController::class, 'show']);
    // Route::post('create', [ProductController::class, 'store']);
    // Route::put('update/{product}',  [ProductController::class, 'update']);
    // Route::delete('delete/{product}',  [ProductController::class, 'destroy']);
});

Route::view('{all}', 'welcome')->where('all', '.*');