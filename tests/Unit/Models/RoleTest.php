<?php

namespace Tests\Unit\Models;

use Tests\TestCase;
use App\Models\Role;
use App\Models\User;
use App\Models\Permission;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class RoleTest extends TestCase
{
    use DatabaseMigrations;

    /** @test */
    public function a_role_has_many_users()
    {
        $role  = Role::factory()->create();
        $users = User::factory()->count(2)->create();

        $role->users()->attach(
            $users->map(function($user){ return $user->id; })->toArray()
        );

        $this->assertInstanceOf(
            User::class,
            $role->fresh()->users()->first()
        );
    }

    /** @test */
    public function a_role_has_many_permissions()
    {
        $role  = Role::factory()->create();
        $permissions = Permission::factory()->count(2)->create();

        $role->permissions()->attach(
            $permissions->map(function($permission){ return $permission->id; })->toArray()
        );

        $this->assertInstanceOf(
            Permission::class,
            $role->fresh()->permissions()->first()
        );
    }

    /** @test */
    public function a_role_has_one_scoped_named_has_permission()
    {
        $roles  = Role::factory()->count(2)->create();
        $permissions = Permission::factory()->count(2)->create();

        $roles->first()->permissions()->attach(
            $permissions->map(function($permission){ return $permission->id; })->toArray()
        );

        $this->assertTrue(
            Role::hasPermission($permissions->first()->name)->exists()
        );

        $this->assertFalse(
            Role::hasPermission('Permission not validate')->exists()
        );
    }

    
}
