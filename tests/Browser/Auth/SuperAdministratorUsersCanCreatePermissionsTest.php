<?php

namespace Tests\Browser\Auth;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class SuperAdministratorUsersCanCreatePermissionsTest extends DuskTestCase
{
    use DatabaseMigrations;

    /**
     * @test
     * @throws Throwable
     */
    public function super_administrator_users_can_create_permissions()
    {
        $user = $this->create_user([], [], ['name' => 'super_administrator']);

        $this->browse(function (Browser $browser) use ($user) {
            $browser->loginAs($user)
                ->visit('/authentication/permissions')
                ->waitFor('@btn-form-create-permissions')
                ->whenAvailable('#form-manage-permissions', function ($modal) {
                    $modal->assertSee('REGISTRAR PERMISO')
                        ->type('@permission-name', 'permission_five')
                        ->type('@permission-description', 'This is permission number five')
                        ->press('btn-manage-permission')
                        ->waitForText('El permiso se registro correctamente.')
                        ->assertSee('El permiso se registro correctamente.')
                        ;
                })
                ->waitForText('permission_five')
                ->assertSee('permission_five')
                ;
        });
    }
}
