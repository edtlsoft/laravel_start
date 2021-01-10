<?php

namespace Tests\Feature\Authentication;

use App\Models\Permission;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ListPermssionsTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function an_user_super_administrator_can_see_all_permissions()
    {
        $user = $this->create_user([], ['name' => 'Super Administrator'], ['name' => 'super_administrator']);

        $permissions     = Permission::factory()->count(3)->create();
        $permission_four = Permission::factory()->create(['created_at' => now()->addMinutes(2)]);
        $permission_five = Permission::factory()->create(['created_at' => now()->addMinutes(3)]);

        $response = $this->actingAs($user)->getJson(route('permissions.index'));
        // dd($response->getContent());

        $response->assertStatus(200);

        $this->assertEquals(
            $permission_five->description,
            $response->json('permissions.0.description')
        );
        $this->assertEquals(
            $permission_four->description,
            $response->json('permissions.1.description')
        );
    }
}
