<?php

namespace App\Http\Controllers\Auth;

use App\Models\Role;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Authentication\StoreRoleRequest;
use App\Http\Resources\Authentication\RoleResource;

class RoleController extends Controller
{
    public function __constructor()
    {
        $this->middleware('auth');
    }

    public function index(Request $request) {
        $request->user()->isAuthorized(['roles_index']);

        $roles = Role::latest()->with('permissions');

        return datatables()->eloquent($roles)->toJson();
    }

    public function store(StoreRoleRequest $request)
    {
        $request->user()->isAuthorized(['roles_store']);

        $role = Role::create($request->only(['name', 'description']));

        $role->permissions()->sync($request->permissions);

        return RoleResource::make($role);
    }
}
