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

    /** @test */
    public function unauthorized_users_can_not_create_permissions()
    {
        $user = $this->create_user();
        $permission = ['name' => 'permission_one', 'description' => 'Permission number one'];

        $response = $this->actingAs($user)->postJson(route('permissions.store'), $permission);

        $response->assertStatus(401);
    }

    /** @test */
    public function a_permission_requires_a_name()
    {
        // Given
        $user = $this->create_user([], ['name' => 'Super Administrator'], ['name' => 'super_administrator']);

        // When
        $response = $this->actingAs($user)->postJson(route('permissions.store'), [
            'name' => ''
        ]);

        // Then
        $response->assertStatus(422);

        $response->assertJsonStructure(['message', 'errors' => ['name']]);
    }

    /** @test */
    public function a_permission_name_requires_a_minimum_length()
    {
        // Given
        $user = $this->create_user([], ['name' => 'Super Administrator'], ['name' => 'super_administrator']);

        // When
        $response = $this->actingAs($user)->postJson(route('permissions.store'), [
            'name' => 'perm',
        ]);
        
        // Then
        $response->assertStatus(422);

        $response->assertJsonStructure(['message', 'errors' => ['name']]);
    }

    /** @test */
    public function a_permission_name_must_be_unique()
    {
        // Given
        $user = $this->create_user([], ['name' => 'Super Administrator'], ['name' => 'super_administrator']);

        // When
        $response = $this->actingAs($user)->postJson(route('permissions.store'), [
            'name' => 'super_administrator',
        ]);
        
        // Then
        $response->assertStatus(422);

        $response->assertJsonStructure(['message', 'errors' => ['name']]);
    }

    /** @test */
    public function a_permission_requires_a_description()
    {
        // Given
        $user = $this->create_user([], ['name' => 'Super Administrator'], ['name' => 'super_administrator']);

        // When
        $response = $this->actingAs($user)->postJson(route('permissions.store'), [
            'name' => 'permission_one',
            'description' => ''
        ]);
        
        // Then
        $response->assertStatus(422);

        $response->assertJsonStructure(['message', 'errors' => ['description']]);
    }

    /** @test */
    public function a_description_permission_requires_a_minimun_length()
    {
        // Given
        $user = $this->create_user([], ['name' => 'Super Administrator'], ['name' => 'super_administrator']);

        // When
        $response = $this->actingAs($user)->postJson(route('permissions.store'), [
            'name' => 'permission_one',
            'description' => 'one'
        ]);
        
        // Then
        $response->assertStatus(422);

        $response->assertJsonStructure(['message', 'errors' => ['description']]);
    }
}
