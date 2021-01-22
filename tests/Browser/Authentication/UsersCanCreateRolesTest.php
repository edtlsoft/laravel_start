<?php

namespace Tests\Browser\Authentication;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class UsersCanCreateRolesTest extends DuskTestCase
{
    use DatabaseMigrations;

    /**
     * @test
     * @throws Throwable
     */
    public function super_administrator_users_can_create_roles()
    {
        $user = $this->create_user([], [], ['name' => 'super_administrator']);

        $this->browse(function (Browser $browser) use ($user) {
            $browser->loginAs($user)
                ->visit('/authentication/roles')
                ->waitFor('@btn-role-form')
                ->click('@btn-role-form')
                ->whenAvailable('#modal-role-form', function ($modal) {
                    $modal->assertSee('REGISTRAR ROLE')
                        ->type('@role-name', 'New Role')
                        ->type('@role-description', 'This is role number five')
                        ->press('@btn-manage-role')
                        ;
                })
                ->waitForText('El role se registro correctamente.')
                ->assertSee('El role se registro correctamente.')
                ->click('.swal2-confirm')
                ->waitForText('New Role')
                ->assertSee('New Role')
                ;
        });
    }

    /**
     * @test
     * @throws Throwable
     */
    public function unauthorized_users_can_not_create_roles()
    {
        $user = $this->create_user([], [], ['name' => 'roles_index']);

        $this->browse(function (Browser $browser) use ($user) {
            $browser->loginAs($user)
                ->visit('/authentication/roles')
                ->waitFor('@btn-roles-form')
                ->click('@btn-roles-form')
                ->whenAvailable('#modal-role-form', function ($modal) {
                    $modal->assertSee('REGISTRAR ROLE')
                        ->type('@role-name', 'role_five')
                        ->type('@role-description', 'This is role number five')
                        ->press('@btn-manage-role')
                        ;
                })
                ->waitForText('No tiene permisos para realizar esta acción, si cree que pueda ser un error del sistema comuníquese con el administrador.')
                ->assertSee('No tiene permisos para realizar esta acción, si cree que pueda ser un error del sistema comuníquese con el administrador.')
                ;
        });
    }
}
