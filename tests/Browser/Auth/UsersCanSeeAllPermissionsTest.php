<?php

namespace Tests\Browser\Auth;

use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use App\Models\Permission;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class UsersCanSeeAllPermissionsTest extends DuskTestCase
{
    use DatabaseMigrations;

    /**
     * @test
     * @throws Throwable
     */
    public function super_administrator_users_can_see_all_permissions()
    {
        $user = $this->create_user([], [], ['name' => 'super_administrator']);

        $permissions = Permission::factory()->count(5)->create();

        $this->browse(function (Browser $browser) use ($user, $permissions) {
            $browser->loginAs($user)
                ->visit('/authentication/permissions')
                ->waitForText($permissions->first()->description)
                ->assertSee($permissions->first()->description)
                ;

            foreach ($permissions as $permission) {
                $browser->assertSee($permission->name)
                    ->assertSee($permission->description)
                    ;
            }
        });
    }
}
