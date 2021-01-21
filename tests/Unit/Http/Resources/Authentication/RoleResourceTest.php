<?php

namespace Tests\Unit\Http\Resources\Authentication;

use Tests\TestCase;
use App\Http\Resources\Authentication\RoleResource;
use Illuminate\Foundation\Testing\RefreshDatabase;

class RoleResourceTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function an_user_resource_must_have_the_necessary_fields()
    {
        // Given
        $user = $this->create_user();
        
        $role = $user->roles->first();

        // When
        $roleResource = RoleResource::make($role)->resolve();

        // Then
        $this->assertEquals(
            $role->id,
            $roleResource['id']
        );

        $this->assertEquals(
            $role->name,
            $roleResource['name']
        );

        $this->assertEquals(
            $role->description,
            $roleResource['description']
        );

        $this->assertEquals(
            $role->permissions,
            $roleResource['permissions']
        );
    }
}
