<?php

namespace Tests\Feature\Authentication;

use Tests\TestCase;
use App\Models\Role;
use Illuminate\Foundation\Testing\RefreshDatabase;

class CanUpdateRolesTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function an_user_super_administrator_can_update_roles()
    {
        $user = $this->create_user([], ['name' => 'Super Administrator'], ['name' => 'super_administrator']);

        $role = Role::factory()->create();

        $roleUpdated = ['name' => 'role_updated', 'description' => 'Description...'];

        $response = $this->actingAs($user)->putJson(
            route('roles.update', $role), 
            $roleUpdated
        );

        $response->assertStatus(200);

        $response->assertJsonFragment($roleUpdated);

        $this->assertDatabaseHas(
            'roles',
            $roleUpdated
        );
    }

    /** @test */
    public function unauthorized_users_can_not_create_roles()
    {
        $user = $this->create_user();
        
        $role = Role::factory()->create();

        $roleUpdated = ['name' => 'role_updated', 'description' => 'Description...'];

        $response = $this->actingAs($user)->putJson(route('roles.update', $role), $roleUpdated);

        $response->assertStatus(401);
    }
}
