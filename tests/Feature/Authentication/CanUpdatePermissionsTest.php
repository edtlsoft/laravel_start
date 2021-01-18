<?php

namespace Tests\Feature\Authentication;

use Tests\TestCase;
use App\Models\Permission;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class CanUpdatePermissionsTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function an_user_super_administrator_can_update_permissions()
    {
        $user = $this->create_user([], ['name' => 'Super Administrator'], ['name' => 'super_administrator']);

        $permission = Permission::factory()->create();

        $permissionUpdated = ['name' => 'permission_updated', 'description' => 'Description...'];

        $response = $this->actingAs($user)->putJson(
            route('permissions.update', $permission), 
            $permissionUpdated
        );

        $response->assertStatus(200);

        $response->assertJsonFragment($permissionUpdated);

        $this->assertDatabaseHas(
            'permissions',
            $permissionUpdated
        );
    }
}
