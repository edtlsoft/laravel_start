<?php

namespace Tests\Unit\Models;

use App\Models\User;
use Tests\TestCase;

class UserTest extends TestCase
{
    /** @test */
    public function an_user_has_an_username()
    {
        $user = User::factory()->make(['username' => '1090111222']);

        $this->assertEquals(
            '1090111222',
            $user->username
        );
    }
}
 