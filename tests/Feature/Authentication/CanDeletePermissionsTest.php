<?php

namespace Tests\Feature\Authentication;

use Tests\TestCase;
use App\Models\Permission;
use Illuminate\Foundation\Testing\RefreshDatabase;

class CanDeletePermissionsTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function an_user_super_administrator_can_delete_permissions()
    {
        $user = $this->create_user([], ['name' => 'Super Administrator'], ['name' => 'super_administrator']);

        $permission = Permission::factory()->create(['created_at' => now()->addMinute()]);

        $response = $this->actingAs($user)->deleteJson(
            route('permissions.destroy', $permission), 
        );

        $response->assertStatus(200);

        $this->assertDatabaseMissing(
            'permissions',
            $permission->toArray()
        );
    }

    /** @test */
    public function unauthorized_users_can_not_delete_permissions()
    {
        $user = $this->create_user();
        
        $permission = Permission::factory()->create();

        $response = $this->actingAs($user)->putJson(
            route('permissions.destroy', $permission)
        );

        $response->assertStatus(401);
    }
}
