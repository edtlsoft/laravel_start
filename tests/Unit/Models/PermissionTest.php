<?php

namespace Tests\Unit\Models;

use Tests\TestCase;
use App\Models\Role;
use App\Models\Permission;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class PermissionTest extends TestCase
{
    use DatabaseMigrations;

    /** @test */
    public function an_role_has_many_permissions()
    {
        $permission = Permission::factory()->create();
        $roles = Role::factory()->count(2)->create();

        $permission->roles()->attach(
            $roles->map(function($role){ return $role->id; })->toArray()
        );

        $this->assertInstanceOf(
            Role::class,
            $permission->fresh()->roles()->first()
        );
    }
}
