<?php
namespace App\Traits;

use Illuminate\Support\Facades\Log;

Trait HasRolesAndPermissionsTrait {

    /**
     * Validate if the user has the required permissions to perform an action.
     * 
     * @param Array $permissions
     * @return boolean 
     */
    public function isAuthorized(array $permissions)
    {
        $permissions = $this->addPermissionForDefault($permissions);

        if( $this->hasAnyPermission($permissions) ){
            return true;
        }
        
        return abort(401, 'No tiene permisos para realizar esta acción, si cree que pueda ser un error del sistema comuníquese con el administrador.');
    }

    /**
     * Add default permissions to the list of permissions.
     * 
     * @param Array $permissions
     * @return Array
     */
    public function addPermissionForDefault(array $permissions)
    {
        if( \is_array($permissions) ){
            \array_unshift($permissions, 'super_administrator');
        } else {
            $permissions = ['super_administrator', $permissions];
        }

        return $permissions;
    }

    /**
     * Validate if has at least one valid permission.
     * 
     * @param Array $permissions
     * @return boolean
     */
    public function hasAnyPermission(array $permissions){
        foreach( $permissions as $permission ){
            if( $this->hasPermission($permission) ){
                return true;
            }
        }

        return false;
    }

    /** 
     * Verifica si tiene el permiso confirmado
     * 
     * @param String $permission
     * @return boolean
    */
    public function hasPermission(string $permission){
        return $this->roles()->hasPermission($permission)->exists();
    }
}