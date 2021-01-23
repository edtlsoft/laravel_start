<?php

namespace App\Http\Controllers\Auth;

use App\Models\Permission;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Authentication\StorePermissionRequest;

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

    public function indexSelect2(Request $request) {
        $request->user()->isAuthorized(['permissions_index']);

        $permissions = Permission::where('name', 'like', "%{$request->search}%")
            ->orWhere('description', 'like', "%{$request->search}%")
            ->get();

        return response()->json(compact('permissions'));
    }

    public function store(StorePermissionRequest $request)
    {
        $request->user()->isAuthorized(['permissions_store']);

        $permission = Permission::create($request->only(['name', 'description']));

        return response()->json($permission);
    }

    public function update(Request $request, Permission $permission)
    {
        $request->user()->isAuthorized(['permissions_update']);

        $permission->update($request->all());

        return response()->json(compact('permission'));
    }

    public function destroy(Request $request, Permission $permission)
    {
        $request->user()->isAuthorized(['permissions_destroy']);

        return $permission->delete();
    }
}
