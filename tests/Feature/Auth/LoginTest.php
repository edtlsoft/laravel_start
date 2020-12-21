<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class LoginTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function users_can_login()
    {
        //$this->withoutExceptionHandling();
        $user = User::factory()->create([
            'username' => '1090111222',
            'password' => bcrypt('123456')
        ]);

        $response = $this->postJson('/login', [
            'username' => $user->username,
            'password' => '123456'
        ]);

        $response->assertJson(['success' => 1, 'message' => 'Usuario autenticado correctamente.']);

        $this->assertAuthenticated();
    }

    /** @test */
    public function cannot_login_with_invalid_information()
    {
        $response = $this->postJson('/login', [
            'username' => 'email@email.com',
            'password' => '1234567'
        ]);

        $response->assertJson(['success' => 0, 'message' => 'Credenciales incorrectas.']);
    }
}
