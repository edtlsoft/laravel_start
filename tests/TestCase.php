<?php

namespace Tests;

use App\Models\Role;
use App\Models\Permission;
use App\Models\User;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;
    
    public function create_user(array $user=[], array $role=[], array $permission=[])
    {
        $permission = Permission::factory()->create($permission);
        $role = Role::factory()->create($role);
        $user = User::factory()->create($user);

        $role->permissions()->attach($permission);
        $user->roles()->attach($role);

        return $user; 
    }

    public function assertClassUseTrait($class, $trait)
    {
        $this->assertArrayHasKey(
            $trait,
            class_uses($class),
            "{$class} must use the trait {$trait}"
        );
    }
}
