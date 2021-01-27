<?php

namespace Tests\Browser\Authentication;

use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use App\Models\Permission;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class UsersCanDeletePermissionsTest extends DuskTestCase
{
    use DatabaseMigrations;

    /**
     * @test
     * @throws Throwable
     */
    public function super_administrator_users_can_delete_permissions()
    {
        $user = $this->create_user([], [], ['name' => 'super_administrator']);

        $permission = Permission::factory()->create(['name' => 'permission_to_delete', 'created_at' => now()->addMinute()]);

        $this->browse(function (Browser $browser) use ($user, $permission) {
            $browser->loginAs($user)
                ->visit('/authentication/permissions')
                ->waitFor('.btn-permission-delete')
                ->click('.btn-permission-delete')
                ->waitForText("¿Está realmente seguro de eliminar el permiso {$permission->name}?")
                ->assertSee("¿Está realmente seguro de eliminar el permiso {$permission->name}?")
                ->click('.swal2-confirm')
                ->waitForText('El permiso se elimino correctamente de la base de datos.')
                ->assertSee('El permiso se elimino correctamente de la base de datos.')
                ;
        });
    }

    /**
     * @test
     * @throws Throwable
     */
    public function unauthorized_users_can_not_delete_permissions()
    {
        $user = $this->create_user([], [], ['name' => 'permissions_index']);

        $permission = Permission::factory()->create(['name' => 'permission_to_delete', 'created_at' => now()->addMinute()]);

        $this->browse(function (Browser $browser) use ($user, $permission) {
            $browser->loginAs($user)
                ->visit('/authentication/permissions')
                ->waitFor('.btn-permission-delete')
                ->click('.btn-permission-delete')
                ->waitForText("¿Está realmente seguro de eliminar el permiso {$permission->name}?")
                ->assertSee("¿Está realmente seguro de eliminar el permiso {$permission->name}?")
                ->click('.swal2-confirm')
                ->waitForText('No tiene permisos para realizar esta acción, si cree que pueda ser un error del sistema comuníquese con el administrador.')
                ->assertSee('No tiene permisos para realizar esta acción, si cree que pueda ser un error del sistema comuníquese con el administrador.')
                ;
        });
    }
}
