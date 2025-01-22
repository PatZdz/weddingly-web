'use client';

export default function Process() {
  return (
    <section
      id="process"
      style={{
        marginTop: '4rem',
        padding: '2rem',
        backgroundColor: '#fff',
        borderRadius: 'var(--border-radius-md)',
      }}
    >
      <h2 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>
        Jak wygląda proces
      </h2>
      <h3 style={{ marginBottom: '2rem' }}>Od pierwszego kontaktu do realizacji</h3>

      {/* Krok 1 */}
      <div style={{ marginBottom: '1.5rem' }}>
        <h4>Pierwszy kontakt</h4>
        <p>Skontaktuj się z nami przez formularz lub telefon. Omówimy Twoje potrzeby i oczekiwania.</p>
      </div>

      {/* Krok 2 */}
      <div style={{ marginBottom: '1.5rem' }}>
        <h4>Spotkanie i planowanie</h4>
        <p>Spotkamy się osobiście, aby omówić szczegóły i stworzyć plan działania.</p>
      </div>

      {/* Krok 3 */}
      <div style={{ marginBottom: '1.5rem' }}>
        <h4>Realizacja</h4>
        <p>Rozpoczynamy pracę nad Twoim projektem, informując Cię o postępach.</p>
      </div>

      {/* Krok 4 */}
      <div style={{ marginBottom: '1.5rem' }}>
        <h4>Efekt końcowy</h4>
        <p>Prezentujemy gotowy projekt i wprowadzamy ewentualne poprawki.</p>
      </div>
    </section>
  );
}
