<?php

namespace App\Http\Controllers\Auth;

use App\Models\Role;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Authentication\StoreRoleRequest;
use App\Http\Resources\Authentication\RoleResource;

class RoleController extends Controller
{
    public function store(StoreRoleRequest $request)
    {
        $request->user()->isAuthorized(['permissions_store']);

        $role = Role::create($request->only(['name', 'description']));

        $role->permissions()->sync($request->permissions);

        return RoleResource::make($role);
    }
}
