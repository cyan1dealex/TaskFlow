import { supabase } from '@shared/api'

export const logout = async (): Promise<void> => {
    const { error } = await supabase.auth.signOut()

    if (error) {
        throw new Error(error.message)
    }
}
