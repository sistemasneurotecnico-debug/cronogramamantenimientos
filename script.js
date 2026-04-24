// Predefined Database
const EQUIPOS_DB = [
    { name: "TESORERIA", plate: "0001", serial: "MJ03S9ZS" },
    { name: "dire-administrativo", plate: "0005", serial: "5CD050FQ90" },
    { name: "Contador-Neuro", plate: "0008", serial: "PC0FTEXT" },
    { name: "CONTA-AUXILIAR", plate: "0013", serial: "BJJFND2" },
    { name: "ADMI-USER3", plate: "0021", serial: "2UA3452BZ1" },
    { name: "calidad", plate: "0026", serial: "PF1G3GD8" },
    { name: "sst-auxiliar", plate: "0030", serial: "CBN0BC20418445H" },
    { name: "regente-2", plate: "0031", serial: "MJ04NE98" },
    { name: "CXMEDICAS-JEFE", plate: "0037", serial: "Default string" },
    { name: "cxmedicas-user1", plate: "0043", serial: "103C_53307F G=D" },
    { name: "cxmedcias-user2", plate: "0047", serial: "MJ00VYUZ" },
    { name: "cxmedicas-lider", plate: "0050", serial: "MJ05M8P9" },
    { name: "DigiImagen", plate: "0202", serial: "To be Filled By O.E.M" },
    { name: "DigiTorre", plate: "0205", serial: "To be Filled By O.E.M" },
    { name: "Almacen", plate: "0208", serial: "5CD9218GMY" },
    { name: "ADMI-USER1", plate: "0211", serial: "MJ03QD7W" },
    { name: "ADMI-USER2", plate: "0217", serial: "MJ03QPAC" },
    { name: "PCESTUDIOS1", plate: "0224", serial: "PF2L2PZN" },
    { name: "PCESTUDIOS2", plate: "0226", serial: "PF0RP978" },
    { name: "PCESTUDIOS3", plate: "0228", serial: "PF2L7JM7" },
    { name: "PCESTUDIOS6", plate: "0232", serial: "PF0Z2GR5" },
    { name: "tecnicas-user3", plate: "0233", serial: "MXL60921FK" },
    { name: "TECNICAS-USER2", plate: "0234", serial: "2UA2400ZXR" },
    { name: "TECNICAS-USER1", plate: "0235", serial: "2BF2HB2" },
    { name: "Jefe-Asistencial", plate: "0236", serial: "MJ03SXBG" },
    { name: "CONS-USER1", plate: "0244", serial: "MXL2340W81" },
    { name: "CALL-USER3", plate: "0253", serial: "J071MS1" },
    { name: "CALL-USER2", plate: "0254", serial: "J055MS1" },
    { name: "NEURO-CONS5", plate: "0264", serial: "s/n" },
    { name: "CONS-USER6", plate: "0269", serial: "2UA4111LW6" },
    { name: "FisiatriaChona", plate: "0273", serial: "HC459S2" },
    { name: "farm-regente", plate: "0274", serial: "4HMH9N2" },
    { name: "TECNOLOGIA-USER1", plate: "0281", serial: "YL00GETN" },
    { name: "PCESTUDIOS4", plate: "0292", serial: "PF2L2PXQ" },
    { name: "PCESTUDIOS5", plate: "0293", serial: "5CG9383GHL" },
    { name: "PCESTUDIOS7", plate: "0301", serial: "DB395B3" },
    { name: "CALL-USER4", plate: "0311", serial: "2UA5081C8M" },
    { name: "RUTASOAT-CONS1", plate: "0313", serial: "MJ04NEAL" },
    { name: "rutasoat-rx", plate: "0319", serial: "2UA4111LY9" },
    { name: "TAC-TECNICO", plate: "0328", serial: "MJ03SA82" },
    { name: "TAC-AUX1", plate: "0338", serial: "MJ03QPA0" },
    { name: "DESKTOP-I7VG0DR", plate: "0343", serial: "MJNZRZD" },
    { name: "RM-AUXILIAR", plate: "0346", serial: "PF0Q9UBQ" },
    { name: "RM-TECNICO", plate: "0351", serial: "MXL5021BX9" },
    { name: "RM-AUX2", plate: "0354", serial: "140130022" },
    { name: "direcmedica (nuevo)", plate: "0370", serial: "PF19C4BQ" },
    { name: "portatildiremedico antiguo", plate: "0374", serial: "5BN7PR1" },
    { name: "coordmedico (nuevo)", plate: "0377", serial: "PF19BR5F" },
    { name: "CONS-USER2", plate: "0386", serial: "MJ54329" },
    { name: "RUTASOAT-CONS2", plate: "0387", serial: "MJ056BW7" },
    { name: "CONS-USER4", plate: "0399", serial: "MXL419264Y" },
    { name: "Lider-Callcenter", plate: "0401", serial: "H0V4KB2" },
    { name: "CONS-USER3", plate: "0404", serial: "MXL0140T7F" },
    { name: "SIAU", plate: "0411", serial: "GEHO22301WEN" },
    { name: "ADMI-USER5", plate: "0415", serial: "2UA44222F0" },
    { name: "ADMI-USER7", plate: "0421", serial: "140602147" },
    { name: "ADMI-USER6", plate: "0429", serial: "2UA4421ZFR" },
    { name: "ADMI-USER4", plate: "0433", serial: "MJ03SXCE" },
    { name: "aux-thuser1", plate: "0439", serial: "63MW482" },
    { name: "CALL-USER1", plate: "0444", serial: "MXL31629BC" },
    { name: "TalentoHumano", plate: "0448", serial: "4CE8133PL7" },
    { name: "coordinadoramedica antiguo", plate: "0453", serial: "MJ0832FM" },
    { name: "PET-TECNICO", plate: "0471", serial: "6CZ53P2" },
    { name: "ADMI-USER8", plate: "0769", serial: "R90N9G77" },
    { name: "ESTUDIOS7", plate: "0770", serial: "PF1AN14T" },
    { name: "FIsiatriaUlises", plate: "0760", serial: "N/A" }
];

// Data Management
let maintenances = JSON.parse(localStorage.getItem('it_maintenances')) || [];
let history = JSON.parse(localStorage.getItem('it_history')) || [];
let currentDate = new Date();
let editingId = null;
let idToDelete = null;

// Auth Configuration
const AUTH_PASSWORD = "Neuro2026**"; // Contraseña predeterminada

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    checkSession();
    initEquiposDatalist();
    renderMaintenances();
    renderHistory();
    renderCalendar();
    initTheme();
    setupEventListeners();
    setupModalListeners();
    setupAuthListeners();
});

function checkSession() {
    const session = sessionStorage.getItem('it_session');
    const role = sessionStorage.getItem('it_role');
    const loginScreen = document.getElementById('loginScreen');
    const mainApp = document.getElementById('mainApp');
    
    if (session === 'active') {
        loginScreen.style.display = 'none';
        mainApp.style.display = 'block';
        document.body.setAttribute('data-role', role || 'guest');
        lucide.createIcons();
    } else {
        loginScreen.style.display = 'flex';
        mainApp.style.display = 'none';
        document.body.removeAttribute('data-role');
    }
}

function setupAuthListeners() {
    const loginForm = document.getElementById('loginForm');
    const guestLoginBtn = document.getElementById('guestLogin');
    const loginError = document.getElementById('loginError');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const pwd = document.getElementById('password').value;

        if (pwd === AUTH_PASSWORD) {
            sessionStorage.setItem('it_session', 'active');
            sessionStorage.setItem('it_role', 'admin');
            checkSession();
        } else {
            loginError.style.display = 'block';
            setTimeout(() => {
                loginError.style.display = 'none';
            }, 3000);
        }
    });

    guestLoginBtn.addEventListener('click', () => {
        sessionStorage.setItem('it_session', 'active');
        sessionStorage.setItem('it_role', 'guest');
        checkSession();
    });
}

function initEquiposDatalist() {
    const equiposDatalist = document.getElementById('equiposList');
    if (!equiposDatalist) return;
    
    equiposDatalist.innerHTML = EQUIPOS_DB.map(eq => `
        <option value="${eq.plate}">${eq.name} | S/N: ${eq.serial}</option>
    `).join('');
}

// Event Delegation for List Actions
function setupEventListeners() {
    const maintenanceList = document.getElementById('maintenanceList');
    const searchInput = document.getElementById('searchInput');
    const filterStatus = document.getElementById('filterStatus');
    const themeToggle = document.getElementById('themeToggle');
    const prevMonthBtn = document.getElementById('prevMonth');
    const nextMonthBtn = document.getElementById('nextMonth');
    const equipoIdInput = document.getElementById('equipoId');
    const historySearch = document.getElementById('historySearch');
    const clearHistoryBtn = document.getElementById('clearHistory');
    const logoutBtn = document.getElementById('logoutBtn');

    maintenanceList.addEventListener('click', (e) => {
        if (sessionStorage.getItem('it_role') === 'guest') return;

        const btn = e.target.closest('.btn-icon');
        if (!btn) return;

        const action = btn.dataset.action;
        const id = parseInt(btn.dataset.id);

        if (action === 'delete') {
            handleDelete(id);
        } else if (action === 'edit') {
            handleEdit(id);
        } else if (action === 'complete') {
            handleComplete(id);
        }
    });

    equipoIdInput.addEventListener('input', (e) => {
        const val = e.target.value;
        const found = EQUIPOS_DB.find(eq => eq.plate === val);
        if (found) {
            document.getElementById('usuario').value = found.name;
        }
    });

    searchInput.addEventListener('input', renderMaintenances);
    filterStatus.addEventListener('change', renderMaintenances);
    historySearch.addEventListener('input', renderHistory);
    
    clearHistoryBtn.addEventListener('click', () => {
        if (sessionStorage.getItem('it_role') !== 'admin') return;
        if (confirm('¿Estás seguro de que deseas vaciar todo el historial?')) {
            history = [];
            saveData();
            renderHistory();
        }
    });

    themeToggle.addEventListener('click', toggleTheme);

    logoutBtn.addEventListener('click', () => {
        if (confirm('¿Estás seguro de que deseas cerrar la sesión?')) {
            sessionStorage.removeItem('it_session');
            sessionStorage.removeItem('it_role');
            location.reload(); // Reload to clear all states
        }
    });

    prevMonthBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });

    nextMonthBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });
}

// Form Submission
const maintenanceForm = document.getElementById('maintenanceForm');
maintenanceForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (sessionStorage.getItem('it_role') === 'guest') return;

    const plateVal = document.getElementById('equipoId').value;
    const foundEq = EQUIPOS_DB.find(eq => eq.plate === plateVal);

    const maintenanceData = {
        equipoId: plateVal,
        serial: foundEq ? foundEq.serial : 'N/A',
        tipoEquipo: document.getElementById('tipoEquipo').value,
        usuario: document.getElementById('usuario').value,
        departamento: document.getElementById('departamento').value,
        fecha: document.getElementById('fecha').value,
        tipoMantenimiento: document.getElementById('tipoMantenimiento').value,
        glpiLink: document.getElementById('glpiLink').value
    };

    if (editingId) {
        const index = maintenances.findIndex(m => m.id === editingId);
        if (index !== -1) {
            maintenances[index] = { ...maintenances[index], ...maintenanceData };
        }
        editingId = null;
        maintenanceForm.querySelector('button[type="submit"]').innerHTML = '<i data-lucide="save"></i> Guardar Programación';
    } else {
        const newMaintenance = {
            id: Date.now(),
            ...maintenanceData,
            status: 'pending'
        };
        maintenances.push(newMaintenance);
    }

    saveData();
    renderMaintenances();
    renderCalendar();
    maintenanceForm.reset();
    lucide.createIcons();
});

// Tab Switching
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        
        btn.classList.add('active');
        const tabId = btn.getAttribute('data-tab');
        document.getElementById(tabId + 'View').classList.add('active');
        
        if (tabId === 'calendar') renderCalendar();
        if (tabId === 'history') renderHistory();
    });
});

// Handlers
function handleDelete(id) {
    if (sessionStorage.getItem('it_role') === 'guest') return;
    idToDelete = id;
    document.getElementById('deleteModal').classList.add('active');
    lucide.createIcons();
}

function setupModalListeners() {
    const modal = document.getElementById('deleteModal');
    const cancelBtn = document.getElementById('cancelDelete');
    const confirmBtn = document.getElementById('confirmDeleteBtn');

    cancelBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        idToDelete = null;
    });

    confirmBtn.addEventListener('click', () => {
        if (sessionStorage.getItem('it_role') === 'guest') return;
        if (idToDelete) {
            const itemToDelete = maintenances.find(m => m.id === idToDelete);
            if (itemToDelete) {
                addToHistory(itemToDelete, 'deleted');
            }
            
            maintenances = maintenances.filter(m => m.id !== idToDelete);
            if (editingId === idToDelete) {
                editingId = null;
                document.getElementById('maintenanceForm').reset();
                document.getElementById('maintenanceForm').querySelector('button[type="submit"]').innerHTML = '<i data-lucide="save"></i> Guardar Programación';
            }
            saveData();
            renderMaintenances();
            renderCalendar();
            renderHistory();
            modal.classList.remove('active');
            idToDelete = null;
        }
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            idToDelete = null;
        }
    });
}

function handleEdit(id) {
    if (sessionStorage.getItem('it_role') === 'guest') return;
    const item = maintenances.find(m => m.id === id);
    if (item) {
        editingId = id;
        document.getElementById('equipoId').value = item.equipoId;
        document.getElementById('tipoEquipo').value = item.tipoEquipo;
        document.getElementById('usuario').value = item.usuario;
        document.getElementById('departamento').value = item.departamento;
        document.getElementById('fecha').value = item.fecha;
        document.getElementById('tipoMantenimiento').value = item.tipoMantenimiento;
        document.getElementById('glpiLink').value = item.glpiLink || '';
        
        document.getElementById('maintenanceForm').querySelector('button[type="submit"]').innerHTML = '<i data-lucide="refresh-cw"></i> Actualizar Programación';
        window.scrollTo({ top: 0, behavior: 'smooth' });
        lucide.createIcons();
    }
}

function handleComplete(id) {
    if (sessionStorage.getItem('it_role') === 'guest') return;
    const index = maintenances.findIndex(m => m.id === id);
    if (index !== -1) {
        const item = maintenances[index];
        item.status = 'completed';
        addToHistory(item, 'completed');
        
        maintenances = maintenances.filter(m => m.id !== id);
        saveData();
        renderMaintenances();
        renderCalendar();
        renderHistory();
    }
}

function addToHistory(item, action) {
    const historyEntry = {
        ...item,
        historyId: Date.now(),
        actionDate: new Date().toISOString(),
        actionType: action
    };
    history.unshift(historyEntry); // Add to beginning
}

// Renderers
function renderMaintenances() {
    const maintenanceList = document.getElementById('maintenanceList');
    const searchInput = document.getElementById('searchInput');
    const filterStatus = document.getElementById('filterStatus');
    const isGuest = sessionStorage.getItem('it_role') === 'guest';
    
    if (!maintenanceList || !searchInput || !filterStatus) return;

    const searchTerm = searchInput.value.toLowerCase();
    const statusFilter = filterStatus.value;

    const filtered = maintenances.filter(item => {
        const matchesSearch = 
            item.equipoId.toLowerCase().includes(searchTerm) ||
            item.usuario.toLowerCase().includes(searchTerm) ||
            (item.serial && item.serial.toLowerCase().includes(searchTerm)) ||
            item.departamento.toLowerCase().includes(searchTerm);
        
        const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    updateStats();

    if (filtered.length === 0) {
        maintenanceList.innerHTML = `
            <div class="empty-state" style="text-align: center; padding: 3rem; color: var(--text-muted);">
                <i data-lucide="search-x" style="font-size: 3rem; margin-bottom: 1rem; display: block;"></i>
                <p>No hay mantenimientos activos.</p>
            </div>
        `;
        lucide.createIcons();
        return;
    }

    maintenanceList.innerHTML = filtered
        .sort((a, b) => new Date(a.fecha) - new Date(b.fecha))
        .map(item => `
            <div class="maintenance-item" data-id="${item.id}">
                <div class="item-icon">
                    <i data-lucide="${getIcon(item.tipoEquipo)}"></i>
                </div>
                <div class="item-info">
                    <h4>${item.equipoId} - ${item.tipoEquipo}</h4>
                    <p><strong>Usuario:</strong> ${item.usuario} | <strong>S/N:</strong> ${item.serial || 'N/A'}</p>
                    <p><strong>Dep:</strong> ${item.departamento || 'N/A'}</p>
                    <p><i data-lucide="calendar" style="width:14px; height:14px; vertical-align: middle;"></i> ${formatDate(item.fecha)} | <strong>Tipo:</strong> ${item.tipoMantenimiento}</p>
                    ${item.glpiLink ? `<a href="${item.glpiLink}" target="_blank" class="glpi-link"><i data-lucide="external-link" style="width:12px; height:12px;"></i> Ver en GLPI</a>` : ''}
                </div>
                <div class="item-meta">
                    <span class="badge badge-pending">Pendiente</span>
                    ${!isGuest ? `
                    <div class="item-actions">
                        <button class="btn-icon" data-action="edit" data-id="${item.id}" title="Editar">
                            <i data-lucide="edit-3"></i>
                        </button>
                        <button class="btn-icon btn-complete" data-action="complete" data-id="${item.id}" title="Marcar como completado">
                            <i data-lucide="check"></i>
                        </button>
                        <button class="btn-icon btn-delete" data-action="delete" data-id="${item.id}" title="Eliminar">
                            <i data-lucide="trash-2"></i>
                        </button>
                    </div>
                    ` : ''}
                </div>
            </div>
        `).join('');

    lucide.createIcons();
}

function renderHistory() {
    const historyList = document.getElementById('historyList');
    const searchInput = document.getElementById('historySearch');
    if (!historyList) return;

    const searchTerm = searchInput.value.toLowerCase();
    const filtered = history.filter(item => 
        item.equipoId.toLowerCase().includes(searchTerm) ||
        item.usuario.toLowerCase().includes(searchTerm) ||
        (item.serial && item.serial.toLowerCase().includes(searchTerm))
    );

    if (filtered.length === 0) {
        historyList.innerHTML = `<p style="text-align:center; padding:2rem; color:var(--text-muted);">Historial vacío.</p>`;
        return;
    }

    historyList.innerHTML = filtered.map(item => `
        <div class="maintenance-item history-item">
            <div class="item-icon">
                <i data-lucide="${getIcon(item.tipoEquipo)}"></i>
            </div>
            <div class="item-info">
                <h4>${item.equipoId} - ${item.tipoEquipo}</h4>
                <p><strong>Usuario:</strong> ${item.usuario} | <strong>S/N:</strong> ${item.serial}</p>
                <p class="history-date">Acción realizada: ${new Date(item.actionDate).toLocaleString()}</p>
            </div>
            <div class="item-meta">
                <span class="badge badge-${item.actionType}">${item.actionType === 'completed' ? 'Completado' : 'Eliminado'}</span>
            </div>
        </div>
    `).join('');
    lucide.createIcons();
}

function renderCalendar() {
    const calendarGrid = document.getElementById('calendarGrid');
    const currentMonthYearEl = document.getElementById('currentMonthYear');
    if (!calendarGrid || !currentMonthYearEl) return;

    calendarGrid.innerHTML = '';
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    currentMonthYearEl.textContent = `${monthNames[month]} ${year}`;

    const firstDay = new Date(year, month, 1).getDay();
    const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const prevMonthDays = new Date(year, month, 0).getDate();
    for (let i = adjustedFirstDay - 1; i >= 0; i--) {
        const dayDiv = createDayDiv(prevMonthDays - i, 'other-month');
        calendarGrid.appendChild(dayDiv);
    }

    const today = new Date();
    for (let i = 1; i <= daysInMonth; i++) {
        const isToday = i === today.getDate() && month === today.getMonth() && year === today.getFullYear();
        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
        const dayDiv = createDayDiv(i, isToday ? 'today' : '');
        
        const dayEvents = maintenances.filter(m => m.fecha === dateStr);
        if (dayEvents.length > 0) {
            const eventContainer = document.createElement('div');
            eventContainer.className = 'calendar-events';
            dayEvents.forEach(ev => {
                const evDiv = document.createElement('div');
                evDiv.className = `event-dot ${ev.status}`;
                evDiv.textContent = `${ev.equipoId}`;
                evDiv.title = `${ev.usuario} - ${ev.tipoMantenimiento}`;
                eventContainer.appendChild(evDiv);
            });
            dayDiv.appendChild(eventContainer);
        }
        
        calendarGrid.appendChild(dayDiv);
    }

    const totalCells = adjustedFirstDay + daysInMonth;
    const remainingCells = 42 - totalCells;
    for (let i = 1; i <= remainingCells; i++) {
        const dayDiv = createDayDiv(i, 'other-month');
        calendarGrid.appendChild(dayDiv);
    }
    
    lucide.createIcons();
}

function createDayDiv(num, className) {
    const div = document.createElement('div');
    div.className = `calendar-day ${className}`;
    div.innerHTML = `<span class="day-number">${num}</span>`;
    return div;
}

function getIcon(type) {
    switch (type) {
        case 'Laptop': return 'laptop';
        case 'Escritorio': return 'monitor';
        case 'Servidor': return 'server';
        case 'Impresora': return 'printer';
        default: return 'cpu';
    }
}

function formatDate(dateStr) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('es-ES', options);
}

function updateStats() {
    const totalEquiposEl = document.getElementById('totalEquipos');
    const pendientesCountEl = document.getElementById('pendientesCount');
    const completadosCountEl = document.getElementById('completadosCount');
    if (!totalEquiposEl) return;

    totalEquiposEl.textContent = maintenances.length;
    pendientesCountEl.textContent = maintenances.length; // Active ones
    completadosCountEl.textContent = history.filter(h => h.actionType === 'completed').length;
}

function saveData() {
    localStorage.setItem('it_maintenances', JSON.stringify(maintenances));
    localStorage.setItem('it_history', JSON.stringify(history));
}

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const themeIcon = document.getElementById('themeIcon');
    if (!themeIcon) return;
    themeIcon.setAttribute('data-lucide', theme === 'light' ? 'moon' : 'sun');
    lucide.createIcons();
}
