<?php

namespace Tests\Browser\Auth;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class UsersCanCreatePermissionsTest extends DuskTestCase
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
                ->waitFor('@btn-permissions-form')
                ->click('@btn-permissions-form')
                ->whenAvailable('#modal-permission-form', function ($modal) {
                    $modal->assertSee('REGISTRAR PERMISO')
                        ->type('@permission-name', 'permission_five')
                        ->type('@permission-description', 'This is permission number five')
                        ->press('@btn-manage-permission')
                        ;
                })
                ->waitForText('El permiso se registro correctamente.')
                ->assertSee('El permiso se registro correctamente.')
                ->click('.swal2-confirm')
                ->waitForText('permission_five')
                ->assertSee('permission_five')
                ;
        });
    }

    /**
     * @test
     * @throws Throwable
     */
    public function unauthorized_users_can_not_create_permissions()
    {
        $user = $this->create_user([], [], ['name' => 'permissions_index']);

        $this->browse(function (Browser $browser) use ($user) {
            $browser->loginAs($user)
                ->visit('/authentication/permissions')
                ->waitFor('@btn-permissions-form')
                ->click('@btn-permissions-form')
                ->whenAvailable('#modal-permission-form', function ($modal) {
                    $modal->assertSee('REGISTRAR PERMISO')
                        ->type('@permission-name', 'permission_five')
                        ->type('@permission-description', 'This is permission number five')
                        ->press('@btn-manage-permission')
                        ;
                })
                ->waitForText('No tiene permisos para realizar esta acción, si cree que pueda ser un error del sistema comuníquese con el administrador.')
                ->assertSee('No tiene permisos para realizar esta acción, si cree que pueda ser un error del sistema comuníquese con el administrador.')
                ;
        });
    }
}
