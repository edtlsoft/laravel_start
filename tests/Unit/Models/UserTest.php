<?php

namespace Tests\Unit\Models;

use Tests\TestCase;
use App\Models\Role;
use App\Models\User;
use App\Models\Employee;
use App\Traits\HasRolesAndPermissionsTrait;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class UserTest extends TestCase
{
    use DatabaseMigrations;

    /** @test */
    public function an_user_has_an_username()
    {
        $user = User::factory()->make(['username' => '1090111222']);

        $this->assertEquals(
            '1090111222',
            $user->username
        );
    }

    /** @test */
    public function an_user_has_one_employee()
    {
        $user     = User::factory()->create(['username' => '1090111222']);
        $employee = Employee::factory()->create(['user_id' => $user->id]);

        $this->assertInstanceOf(
            Employee::class,
            $user->fresh()->employee
        );
    }

    /** @test */
    public function an_user_has_many_roles()
    {
        $user  = User::factory()->create(['username' => '1090111222']);
        $roles = Role::factory()->count(2)->create();

        $user->roles()->attach(
            $roles->map(function($role){ return $role->id; })->toArray()
        );

        $this->assertInstanceOf(
            Role::class,
            $user->fresh()->roles()->first()
        );
    }

    /** @test */
    public function user_model_must_use_the_trait_has_roles_and_permissions()
    {
        $this->assertClassUseTrait(User::class, HasRolesAndPermissionsTrait::class);
    }
}
 