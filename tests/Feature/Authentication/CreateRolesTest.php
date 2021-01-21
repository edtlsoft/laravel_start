<?php

namespace Tests\Feature\Authentication;

use Tests\TestCase;
use App\Models\Permission;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class CreateRolesTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function an_user_super_administrator_can_create_roles()
    {
        $user = $this->create_user([], ['name' => 'Super Administrator'], ['name' => 'super_administrator']);
        
        $permission = Permission::factory()->create(['name' => 'permission_one', 'description' => 'Permission number one']);

        $role = [
            'name' => 'Role One', 
            'description' => 'Role number one',
            'permissions' => [$permission->id],
        ];

        $response = $this->actingAs($user)->postJson(route('roles.store'), $role);
        
        $response->assertJson([
            'data' => [
                'name' => $role['name'],
                'description' => $role['description'],
                'permissions' => [
                    $permission->toArray()
                ]
            ]
        ]);

        $this->assertDatabaseHas('roles', [
            'name' => $role['name'],
            'description' => $role['description'],
        ]);
        $this->assertDatabaseHas('permission_role', [
            'permission_id' => $permission->id,
            'role_id' => $response->json('data.id')
        ]);
    }

    /** @test */
    public function unauthorized_users_can_not_create_roles()
    {
        $user = $this->create_user();
        
        $role = [
            'name' => 'Role One', 
            'description' => 'Role number one',
            'permissions' => [],
        ];

        $response = $this->actingAs($user)->postJson(route('roles.store'), $role);

        $response->assertStatus(401);
    }

    /** @test */
    public function a_role_requires_a_name()
    {
        // Given
        $user = $this->create_user([], ['name' => 'Super Administrator'], ['name' => 'super_administrator']);

        // When
        $response = $this->actingAs($user)->postJson(route('roles.store'), [
            'name' => ''
        ]);

        // Then
        $response->assertStatus(422);

        $response->assertJsonStructure(['message', 'errors' => ['name']]);
    }

    /** @test */
    public function a_role_name_requires_a_minimum_length()
    {
        // Given
        $user = $this->create_user([], ['name' => 'Super Administrator'], ['name' => 'super_administrator']);

        // When
        $response = $this->actingAs($user)->postJson(route('roles.store'), [
            'name' => 'role',
        ]);
        
        // Then
        $response->assertStatus(422);

        $response->assertJsonStructure(['message', 'errors' => ['name']]);
    }

    /** @test */
    public function a_role_name_must_be_unique()
    {
        // Given
        $user = $this->create_user([], ['name' => 'Super Administrator'], ['name' => 'super_administrator']);

        // When
        $response = $this->actingAs($user)->postJson(route('roles.store'), [
            'name' => 'Super Administrator',
        ]);
        
        // Then
        $response->assertStatus(422);

        $response->assertJsonStructure(['message', 'errors' => ['name']]);
    }

    /** @test */
    public function a_role_requires_a_description()
    {
        // Given
        $user = $this->create_user([], ['name' => 'Super Administrator'], ['name' => 'super_administrator']);

        // When
        $response = $this->actingAs($user)->postJson(route('roles.store'), [
            'name' => 'Role One',
            'description' => ''
        ]);
        
        // Then
        $response->assertStatus(422);

        $response->assertJsonStructure(['message', 'errors' => ['description']]);
    }

    /** @test */
    public function a_description_role_requires_a_minimun_length()
    {
        // Given
        $user = $this->create_user([], ['name' => 'Super Administrator'], ['name' => 'super_administrator']);

        // When
        $response = $this->actingAs($user)->postJson(route('roles.store'), [
            'name' => 'Role One',
            'description' => 'Role'
        ]);
        
        // Then
        $response->assertStatus(422);

        $response->assertJsonStructure(['message', 'errors' => ['description']]);
    }
}
