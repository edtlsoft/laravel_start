<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Permission;
use Illuminate\Http\Request;

class PermissionController extends Controller
{
    public function __constructor()
    {
        $this->middleware('auth');
    }

    public function index(Request $request) {
        $request->user()->isAuthorized(['permissions_index']);

        $permissions = Permission::latest();

        return datatables()->eloquent($permissions)->toJson();
    }

    public function store(Request $request)
    {
        $request->user()->isAuthorized(['permissions_store']);

        $permission = Permission::create($request->only(['name', 'description']));

        return response()->json($permission);
    }
}
