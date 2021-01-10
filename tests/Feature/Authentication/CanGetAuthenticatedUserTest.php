<?php

namespace Tests\Feature\Authentication;

use Tests\TestCase;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

class CanGetAuthenticatedUserTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function an_authenticated_user_can_get_their_data()
    {
        $this->withoutExceptionHandling();
        $user = User::factory()->create();

        $response = $this->actingAs($user)->getJson('/users/authenticated');

        $response->assertJson([
            'data' => [
                'id' => $user->id,
                'username' => $user->username,
                'email' => $user->email,
            ]
        ]);

        $this->assertAuthenticated();
    }
}
