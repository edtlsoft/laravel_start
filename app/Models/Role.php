<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;

    public function users()
    {
        return $this->belongsToMany(User::class);
    }

    public function permissions()
    {
        return $this->belongsToMany(Permission::class);
    }

    public function scopeHasPermission($query, $permission_name)
    {
        return $query->whereHas('permissions', function($query) use ($permission_name){
            $query->where('name', $permission_name);
        });
    }
}
