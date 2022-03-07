const logout = document.getElementById('logout')

async function logOutUser() {
    const response = await fetch('/api/user/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    })

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to log out');
    }
}


document.getElementById('logout').addEventListener('click', logOutUser)