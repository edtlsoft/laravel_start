<?php

namespace Tests\Browser\Authentication;

use App\Models\Role;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class UsersCanSeeAllRolesTest extends DuskTestCase
{
    use DatabaseMigrations;

    /**
     * @test
     * @throws Throwable
     */
    public function super_administrator_users_can_see_all_roles()
    {
        $user = $this->create_user([], [], ['name' => 'super_administrator']);

        $roles = Role::factory()->count(3)->create();

        $this->browse(function (Browser $browser) use ($user, $roles) {
            $browser->loginAs($user)
                ->visit('/authentication/roles')
                ->waitForText($roles->first()->name)
                ->assertSee($roles->first()->name)
                ;

            foreach ($roles as $role) {
                $browser->assertSee($role->name)
                    ->assertSee($role->description)
                    ->assertSee("{$role->permissions->count()} permisos")
                    ;
            }
        });
    }

    /**
     * @test
     * @throws Throwable
     */
    public function unauthorized_users_can_not_see_all_roles()
    {
        $user = $this->create_user();

        Role::factory()->count(5)->create();

        $this->browse(function (Browser $browser) use ($user) {
            $browser->loginAs($user)
                ->visit('/authentication/roles')
                ->waitForText('Dashboard')
                ->assertSee('Dashboard')
                ;
        });
    }
}
