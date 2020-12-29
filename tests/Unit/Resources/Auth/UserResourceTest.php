<?php

namespace Tests\Unit\Resources\Auth;

use Tests\TestCase;
use App\Models\User;
use App\Http\Resources\Auth\UserResource;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserResourceTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function an_user_resource_must_have_the_necessary_fields()
    {
        // Given
        $user = User::factory()->create();

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
    }
}
