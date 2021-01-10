<?php

namespace Tests\Feature\Authentication;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CreatePermissionsTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function an_user_super_administrator_can_create_permissions()
    {
        $this->withoutExceptionHandling();
        $user = $this->create_user([], ['name' => 'Super Administrator'], ['name' => 'super_administrator']);
        $permission = ['name' => 'permission_one', 'description' => 'Permission number one'];

        $response = $this->actingAs($user)->postJson(route('permissions.store'), $permission);

        $response->assertJson([
            'name' => $permission['name'],
            'description' => $permission['description']
        ]);

        $this->assertDatabaseHas('permissions', [
            'name' => $permission['name'],
            'description' => $permission['description'],
        ]);
    }
}
