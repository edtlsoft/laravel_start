<?php

namespace Tests\Unit\Resources\Auth;

use Tests\TestCase;
use App\Http\Resources\Auth\UserResource;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserResourceTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function an_user_resource_must_have_the_necessary_fields()
    {
        // Given
        $user = $this->create_user();

        // When
        $userResource = UserResource::make($user)->resolve();

        // Then
        $this->assertEquals(
            $user->id,
            $userResource['id']
        );

        $this->assertEquals(
            $user->username,
            $userResource['username']
        );

        $this->assertEquals(
            $user->email,
            $userResource['email']
        );

        $this->assertEquals(
            $user->roles,
            $userResource['roles']
        );
        $this->assertEquals(
            $user->roles->first()->permissions,
            $userResource['roles'][0]['permissions']
        );
    }
}
