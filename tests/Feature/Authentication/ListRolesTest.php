<?php

namespace Tests\Feature\Authentication;

use Tests\TestCase;
use App\Models\Role;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ListRolesTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function an_user_super_administrator_can_see_all_roles()
    {
        $user = $this->create_user([], ['name' => 'Super Administrator'], ['name' => 'super_administrator']);

        Role::factory()->count(3)->create();
        $role_four = Role::factory()->create(['created_at' => now()->addMinutes(2)]);
        $role_five = Role::factory()->create(['created_at' => now()->addMinutes(3)]);

        $response = $this->actingAs($user)->getJson(route('roles.index'));

        $response->assertStatus(200);

        $this->assertEquals(
            $role_five->description,
            $response->json('data.0.description')
        );
        $this->assertEquals(
            $role_four->description,
            $response->json('data.1.description')
        );
    }

    /** @test */
    public function unauthorized_users_can_not_see_all_roles()
    {
        $user = $this->create_user();
        Role::factory()->count(3)->create();

        $response = $this->actingAs($user)->getJson(route('roles.store'));

        $response->assertStatus(401);
    }
}
